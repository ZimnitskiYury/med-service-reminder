// <copyright file="AuthController.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using MedicalReminder.Db.Entities;
using MedicalReminder.Models;
using MedicalReminder.Services.JWT;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace MedicalReminder.Controllers
{
    /// <summary>
    /// Controller for authentication and authorization.
    /// </summary>
    [Route("auth/")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly UserManager<UserEntity> _userManager;
        private readonly SignInManager<UserEntity> _signInManager;
        private readonly JwtTokenService _jwtTokenService;

        /// <summary>
        /// Initializes a new instance of the <see cref="AuthController"/> class.
        /// </summary>
        /// <param name="userManager">UserManager of the Identity.</param>
        /// <param name="signInManager">SignInManager of Identity.</param>
        /// <param name="jwtTokenService">JwtTokenService.</param>
        public AuthController(UserManager<UserEntity> userManager, SignInManager<UserEntity> signInManager, JwtTokenService jwtTokenService)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _jwtTokenService = jwtTokenService;
        }

        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login([FromBody] LoginModel request)
        {
            var result = await _signInManager.PasswordSignInAsync(request.Login, request.Password, false, false);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByNameAsync(request.Login);
                var token = _jwtTokenService.GetToken(user);
                return Ok(token);
            }

            return BadRequest();
        }

        [HttpPost]
        [Route("Register")]
        public async Task<IActionResult> Register([FromBody] LoginModel request)
        {
            var result = await _userManager.CreateAsync(new UserEntity { UserName = request.Login }, request.Password);
            if (result.Succeeded)
            {
                var user = await _userManager.FindByNameAsync(request.Login);
                var token = _jwtTokenService.GetToken(user);
                return Ok(token);
            }

            return BadRequest();
        }
    }
}
