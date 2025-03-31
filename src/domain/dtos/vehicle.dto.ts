import { VehicleUnavailability } from "../entities/Vehicle";

export interface CreateVehicleRequestDto {
    vehicleModel: string;
    make: string;
    color: string;
    year: number;
    license_plate: string;
    url_photos: string[];
    daily_price: number;
    rental_conditions: string;
    // Datos de la API externa
    class?: string;
    drive?: string;
    fuel_type?: string;
    transmission?: string;
    combination_mpg?: number;
    displacement?: number;
}

export interface GetVehicleResponseDto {
    id: string;
    ownerId: string;
    vehicleModel: string;
    make: string;
    color: string;
    year: number;
    license_plate: string;
    url_photos: string[];
    daily_price: number;
    rental_conditions: string;
    class?: string;
    drive?: string;
    fuel_type?: string;
    transmission?: string;
    combination_mpg?: number;
    displacement?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UpdateVehicleRequestDto {
    vehicleModel?: string;
    make?: string;
    color?: string;
    year?: number;
    license_plate?: string;
    url_photos?: string[];
    daily_price?: number;
    rental_conditions?: string;
    class?: string;
    drive?: string;
    fuel_type?: string;
    transmission?: string;
    combination_mpg?: number;
    displacement?: number;
}

export interface VehicleListResponseDto extends Array<GetVehicleResponseDto> { }