using System;

namespace medical_reminder_api.Models
{
    public class PatientModel
    {
        public string Firstname { get; set; }

        /// <summary>
        ///     Gets or sets lastname of patient.
        /// </summary>
        public string Lastname { get; set; }

        /// <summary>
        ///     Gets or sets middlename of patient.
        /// </summary>
        public string Middlename { get; set; }

        /// <summary>
        ///     Gets or sets date of birth of patient.
        /// </summary>
        public DateTime DateOfBirth { get; set; }

        /// <summary>
        ///     Gets or sets sex of patient.
        /// </summary>
        public string Sex { get; set; }

        /// <summary>
        ///     Gets or sets passport id of patient.
        /// </summary>
        public string PassportId { get; set; }
    }
}