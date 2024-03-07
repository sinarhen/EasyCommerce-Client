export type TUser = {
  id: string;
  email: string;
  username: string;
  imageUrl: string;
  phoneNumber: string;
  role: "Customer" | "Seller" | "Admin" | "SuperAdmin";
  roles: ("Customer" | "Seller" | "Admin" | "SuperAdmin")[];
  isBanned: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TRole = {
  name: "Customer" | "Seller" | "Admin" | "SuperAdmin";
}