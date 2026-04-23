using System;

namespace API.DTOs;

public record UserDto
(
    string Id,
    string Email,
    string DisplayName,
    string? ImageUrl,
    string Token
);