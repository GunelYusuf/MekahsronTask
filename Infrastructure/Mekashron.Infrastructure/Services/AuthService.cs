using Newtonsoft.Json;
using Mekashron.Application.Abstraction.Services;
using Mekashron.Application.Dtos;
using TechService;

namespace Mekashron.Infrastructure.Services;

public class AuthService : IAuthService
{


    public async Task<LoginResponseDto> GetLoginAsync(string username, string password)
    {
        var client = new ICUTechClient();
        LoginRequest loginRequest = new()
        {
            UserName = username,
            Password = password,
            IPs = String.Empty
        };

        var resObj = await client.LoginAsync(loginRequest);
        LoginResponseDto resp =  JsonConvert.DeserializeObject<LoginResponseDto>(resObj.@return);

        return resp;
        
    }
}

