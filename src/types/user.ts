export type TUser = {
  id: string;
  email: string;
  username: string;
  imageUrl: string;
  phoneNumber: string;
  role: TRole;
  roles: TRole[];
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TRole = {
  name: "Customer" | "Seller" | "Admin" | "SuperAdmin";
}