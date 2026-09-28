using API.Data;
using API.Entities;
using API.Middleware;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<StoreContext>(options =>
{
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
});
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.AddCors();

// Add identity API endpoints for the User entity
builder.Services.AddIdentityApiEndpoints<User>(options =>
{
   options.User.RequireUniqueEmail = true;
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

// just an expection value 
//app.UseMiddleware<ExceptionMiddleware>();

app.UseDefaultFiles();
app.UseStaticFiles();

app.UseCors(opt =>
{
    opt.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:5173");
});

app.UseHttpsRedirection();

// Authentication and authorization middleware
app.UseAuthentication(); // Identifies the user based on their credentials
app.UseAuthorization(); // Authorizes the user based on their roles and permissions
app.MapGroup("api").MapIdentityApi<User>(); //api/login

// Controllers middleware
app.MapControllers();
app.MapFallbackToController("Index", "Fallback");

DbInitializer.InitDb(app);

app.Run();
