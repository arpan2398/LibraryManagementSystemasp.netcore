using LibraryManagementSystem.Interface;
using LibraryManagementSystem.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LibraryManagementSystem.Controllers
{
    [EnableCors("AllowOrigin")]
    [Route("api/[controller]")]
    [ApiController]
    public class EBookController : ControllerBase
    {
        private readonly IEBook _eBook;

        public EBookController(IEBook eBook)
        {
            _eBook = eBook;
        }
        // GET: api/<EBookController>
        [HttpGet]
        public async Task<IEnumerable<EBook>> Get()
        {
            return await _eBook.GetEbookAsync();
        }

        // GET api/<EBookController>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            EBook eBook = await _eBook.GetEbook(id);
            if (eBook == null)
            {
                return NotFound("Not found the EBook");
            }
            return Ok(eBook);
        }

        // POST api/<EBookController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] EBook eBook)
        {
            await _eBook.AddEbook(eBook);
            return Ok("Successfully add EBook");
        }

        // PUT api/<EBookController>/5
        [HttpPut]
        public async Task<IActionResult> Put([FromBody] EBook eBook)
        {
            EBook eBook1 = await _eBook.UpdateEbookAsync(eBook);
            if (eBook1 == null)
            {
                return NotFound("Not found the EBook");
            }
            return Ok(eBook1);
        }

        // DELETE api/<EBookController>/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _eBook.DeleteEbookAsync(id);
            return Ok("Successfully delete EBook");
        }
    }
}
