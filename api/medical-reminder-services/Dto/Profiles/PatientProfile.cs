using System;
using AutoMapper;
using medical_reminder_data_access.Entities;
using medical_reminder_data_access.Entities.Enums;

namespace medical_reminder_services.Dto.Profiles
{
    internal class PatientProfile : Profile
    {
        public PatientProfile()
        {
            CreateMap<Patient, PatientDto>();
            CreateMap<PatientDto, Patient>()
                .ForMember(dest => dest.Sex,
                    opt => opt.MapFrom(d => (Gender)Enum.Parse(typeof(Gender), d.Sex, true)));
        }
    }
}