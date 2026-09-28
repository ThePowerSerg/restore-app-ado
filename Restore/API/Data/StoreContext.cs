using API.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class StoreContext(DbContextOptions options) : IdentityDbContext<User>(options)
    {
        public required DbSet<Product> Products { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Id = "f7afb738-69ed-418d-a00e-c1bd5d87b56a",
                    ConcurrencyStamp = "Member",
                    Name = "Member",
                    NormalizedName = "MEMBER"
                },
                 new IdentityRole
                {
                    Id = "12490f2f-c43a-47a1-aaca-2578d66e2c60",
                    ConcurrencyStamp = "Admin",
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                }
            );
        }
    }
}