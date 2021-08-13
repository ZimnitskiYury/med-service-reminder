// <copyright file="DiagnosisEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using medical_reminder_data_access.Entities.Enums;

namespace medical_reminder_data_access.Entities
{
    [Table("Diagnoses")]
    public class Diagnosis
    {
        [Key]
        public int Id { get; set; }

        public DiagnosisType Type { get; set; }

        public string Name { get; set; }

        public int PatientId { get; set; }

        public Patient Patient { get; set; }
    }
}
