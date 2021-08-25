using AutoMapper;
using medical_reminder_services.Dto;

namespace medical_reminder_api.Models.Profiles
{
    public class PatientModelProfile : Profile
    {
        public PatientModelProfile()
        {
            CreateMap<PatientModel, PatientDto>().ReverseMap();
        }
    }
}