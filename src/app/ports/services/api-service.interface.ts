import { inject, Injectable } from "@angular/core";
import { AuthtokenResponseDto } from "../../dtos/auth-token-response.dto";
import { LoginInputDto } from "../../dtos/login-input.dto";
import { ProfileResponseDto } from "../../dtos/profile-response.dto";
import { AuthToken } from "../../../domain/objetcs/auth-token.object";

export interface ApiClientInterface {
    getProfile(): Promise<ProfileResponseDto>;
    login(input: LoginInputDto): Promise<AuthtokenResponseDto>;
}
