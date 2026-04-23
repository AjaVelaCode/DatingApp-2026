using System;
using System.ComponentModel.DataAnnotations;

namespace API.DTOs;

public record LoginDto(   
    [Required]
    [EmailAddress]
    string Email,
    [Required]
    string Password);
