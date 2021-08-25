using System.Threading.Tasks;
using AutoMapper;
using medical_reminder_data_access.Entities;
using medical_reminder_data_access.UoW;
using medical_reminder_services.Dto;

namespace medical_reminder_services.Patients
{
    public class PatientManager
    {
        private readonly IMapper _mapper;
        private readonly IUnitOfWork _uow;

        public PatientManager(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public async Task<PatientDto> AddPatientAsync(PatientDto patient)
        {
            var result =  await _uow.Patients.Add(_mapper.Map<PatientDto, Patient>(patient));
            await _uow.CompleteAsync();
            return _mapper.Map<Patient, PatientDto>(result);
        }

        public async Task<PatientDto> FindPatientById(int id)
        {
            var patient = await _uow.Patients.GetById(id);
            return _mapper.Map<PatientDto>(patient);
        }
    }
}
