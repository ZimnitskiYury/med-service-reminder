using medical_reminder_data_access.Entities;
using medical_reminder_data_access.UoW;

namespace medical_reminder_services.Patients
{
    public class PatientManager
    {

        private readonly IUnitOfWork _uow;

        public PatientManager(IUnitOfWork uow)
        {
            _uow = uow;
        }

        public void AddPatient(Patient patient)
        {
            _uow.Patients.Add(patient);
            _uow.CompleteAsync();
        }
    }
}
