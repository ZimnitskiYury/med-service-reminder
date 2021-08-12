// <copyright file="LifeAnamnesisEntity.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalReminder.Db.Entities
{
    [Table("LifeAnamnesis")]
    public class LifeAnamnesisEntity
    {
        [Key]
        public int Id { get; set; }

        public bool Heredity { get; set; }

        public bool Military { get; set; }

        public Education Education { get; set; }

        public Disability Disability { get; set; }

        public FamilyStatus Family { get; set; }

        public string Work { get; set; }

        public bool Childrens { get; set; }

        public DriveLicense DriveLicense { get; set; }

        public bool Conviction { get; set; }

        public bool Offences { get; set; }

        public string Profession { get; set; }

        public string Position { get; set; }

        public string SpecialStatus { get; set; }

        public int PatientId { get; set; }

        public PatientEntity Patient { get; set; }
    }
}
