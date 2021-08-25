using System.Threading.Tasks;
using AutoMapper;
using medical_reminder_api.Models;
using medical_reminder_services.Dto;
using medical_reminder_services.Patients;
using Microsoft.AspNetCore.Mvc;

namespace medical_reminder_api.Controllers
{
    [Route("api/patients")]
    [ApiController]
    public class PatientController : ControllerBase
    {
        private readonly PatientManager _patientManager;
        private readonly IMapper _mapper;

        public PatientController(PatientManager patientManager, IMapper mapper)
        {
            _patientManager = patientManager;
            _mapper = mapper;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetPatient(int id)
        {
            var result = await _patientManager.FindPatientById(id);
            if (result != null)
            {
                return Ok(result);
            }

            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> AddPatient([FromBody] PatientModel patient)
        {
            var result = await _patientManager.AddPatientAsync(_mapper.Map<PatientDto>(patient));
            if (result?.Id != null)
            {
                return Ok(result);
            }

            return BadRequest();
        }
    }
}