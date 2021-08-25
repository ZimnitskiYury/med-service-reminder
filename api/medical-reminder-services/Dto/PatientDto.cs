using System;

namespace medical_reminder_services.Dto
{
    public class PatientDto
    {
        /// <summary>
        /// Gets or sets id of patient.
        /// </summary>
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
        public DateTime DateOfBirth { get; set; }

        /// <summary>
        /// Gets or sets sex of patient.
        /// </summary>
        public string Sex { get; set; }

        /// <summary>
        /// Gets or sets passport id of patient.
        /// </summary>
        public string PassportId { get; set; }
    }
}
