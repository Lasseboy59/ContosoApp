﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Contoso.API.Controllers
{
    public class ValuesController : ApiController
    {
        // GET contoso/values

        // [HttpGet]

        public IEnumerable<string> GetSomething()
        {
            return new string[] { "value1", "value2" };
        }

        [Route("call-my-api/{id}")]
        [HttpGet]
        // GET api/values/5
        public string SomethingElse(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }
    }
}
