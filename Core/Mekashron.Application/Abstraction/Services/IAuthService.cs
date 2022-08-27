using Mekashron.Application.Dtos;

namespace Mekashron.Application.Abstraction.Services;

public interface IAuthService
{
    Task<LoginResponseDto> GetLoginAsync(string username, string password);
   

}

