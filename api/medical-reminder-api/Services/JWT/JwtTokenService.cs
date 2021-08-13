// <copyright file="JwtTokenService.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using medical_reminder_data_access.Entities;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace MedicalReminder.Services.JWT
{
    /// <summary>
    /// Service for works with jwt token.
    /// </summary>
    public class JwtTokenService
    {
        private readonly IConfiguration _configuration;

        /// <summary>
        /// Initializes a new instance of the <see cref="JwtTokenService"/> class.
        /// </summary>
        /// <param name="configuration">Configuration from appsettings.json.</param>
        public JwtTokenService(IConfiguration configuration) => _configuration = configuration;

        /// <summary>
        /// Return jwt-token.
        /// </summary>
        /// <param name="user">UserIdentity.</param>
        /// <returns>Jwt token.</returns>
        public string GetToken(User user)
        {
            var jwt = new JwtSecurityToken(
                issuer: _configuration["JWT:JwtIssuer"],
                signingCredentials: new SigningCredentials(
                    new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:JwtKey"])),
                    SecurityAlgorithms.HmacSha256),
                expires: DateTime.Now.AddDays(double.Parse(_configuration["JWT:JwtExpireDays"])));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            return encodedJwt;
        }
    }
}
