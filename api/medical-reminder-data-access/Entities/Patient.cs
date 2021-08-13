// <copyright file="PatientEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using medical_reminder_data_access.Entities.Enums;

namespace medical_reminder_data_access.Entities
{
    /// <summary>
    /// Entity of patient.
    /// </summary>
    [Table("Patients")]
    public class Patient
    {
        /// <summary>
        /// Gets or sets id of patient.
        /// </summary>
        [Key]
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets firstname of patient.
        /// </summary>
        public string Firstname { get; set; }

        /// <summary>
        /// Gets or sets lastname of patient.
        /// </summary>
        public string Lastname { get; set; }

        /// <summary>
        /// Gets or sets middlename of patient.
        /// </summary>
        public string Middlename { get; set; }

        /// <summary>
        /// Gets or sets date of birth of patient.
        /// </summary>
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        /// <summary>
        /// Gets or sets sex of patient.
        /// </summary>
        public Gender Sex { get; set; }

        /// <summary>
        /// Gets or sets passport id of patient.
        /// </summary>
        public string PassportId { get; set; }

        /// <summary>
        /// Gets or sets lifeAnamnesis.
        /// </summary>
        public LifeAnamnesis LifeAnamnesis { get; set; }

        /// <summary>
        /// Gets or sets location.
        /// </summary>
        public Location Location { get; set; }

        /// <summary>
        /// Gets or sets observation.
        /// </summary>
        public Observation Observation { get; set; }

        /// <summary>
        /// Gets or sets visits.
        /// </summary>
        public List<Visit> Visits { get; set; }

        /// <summary>
        /// Gets or sets diagnoses.
        /// </summary>
        public List<Diagnosis> Diagnoses { get; set; }
    }
}
