// <copyright file="ObservationEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalReminder.Db.Entities
{
    [Table("Observations")]
    public class ObservationEntity
    {
        [Key]
        public int Id { get; set; }

        [DataType(DataType.Date)]
        public DateTime Registration { get; set; }

        [DataType(DataType.Date)]
        public DateTime Deregistration { get; set; }

        public ObservationGroup Group { get; set; }

        [DataType(DataType.Date)]
        public DateTime Examination { get; set; }

        public string Reason { get; set; }

        public int PatientId { get; set; }

        public PatientEntity Patient { get; set; }
    }
}
