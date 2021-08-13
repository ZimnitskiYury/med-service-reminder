// <copyright file="UserDbContext.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using medical_reminder_data_access.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace medical_reminder_data_access.Contexts
{
    /// <summary>
    /// Context for works with IdentityDbContext.
    /// </summary>
    public class DatabaseContext : IdentityDbContext<User>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="DatabaseContext"/> class.
        /// </summary>
        /// <param name="options">DbContext options.</param>
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }

        /// <summary>
        /// Gets or sets table of patients.
        /// </summary>
        public DbSet<Patient> Patients { get; set; }

        /// <summary>
        /// Gets or sets table of Observations.
        /// </summary>
        public DbSet<Observation> Observations { get; set; }

        /// <summary>
        /// Gets or sets table of Locations.
        /// </summary>
        public DbSet<Location> Locations { get; set; }

        /// <summary>
        /// Gets or sets table of Visits.
        /// </summary>
        public DbSet<Visit> Visits { get; set; }
        
        /// <summary>
        /// Gets or sets table of Visits.
        /// </summary>
        public DbSet<Diagnosis> Diagnosis { get; set; }
        /// <summary>
        /// Gets or sets table of Visits.
        /// </summary>
        public DbSet<LifeAnamnesis> Anamnesis { get; set; }
    }
}
