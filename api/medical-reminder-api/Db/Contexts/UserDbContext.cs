// <copyright file="UserDbContext.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using MedicalReminder.Db.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MedicalReminder.Db.Contexts
{
    /// <summary>
    /// Context for works with IdentityDbContext.
    /// </summary>
    public class UserDbContext : IdentityDbContext<UserEntity>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="UserDbContext"/> class.
        /// </summary>
        /// <param name="options">DbContext options.</param>
        public UserDbContext(DbContextOptions<UserDbContext> options) : base(options)
        {
        }

        /// <summary>
        /// Gets or sets table of patients.
        /// </summary>
        public DbSet<PatientEntity> Patients { get; set; }
    }
}
