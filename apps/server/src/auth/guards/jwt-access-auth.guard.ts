import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAccessAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService
  ) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest()
    try {
      const authHeader = req.headers?.authorization;
      if (!authHeader) {
        throw new UnauthorizedException({message: 'User unauthorized'});
      }

      const bearer = authHeader.split(' ')[0]
      const token = authHeader.split(' ')[1]

      if(bearer != 'Bearer' || !token) {
        throw new UnauthorizedException({message: 'User unauthorized'})
      }

      const user = this.jwtService.verifyAsync(token, {
        secret: this.configService.get<string>('JWT_ACCESS_SECRET')
      });
      req.user = user;
      return true;

    } catch (e) {
      console.log(e)
      throw new UnauthorizedException({message: 'User unauthorized'})
    }
  }
}