export interface UserInfo {
	id: number;
	username: string;
	email: string;
	password: string;
	role: string;
	avatar: string | null;
	created_at: string;
	updated_at: string;
}

//  phần type ở đây, để đảm bảo frontend và backend nhất quán, khi nào nào chuẩn fe và be thì dùng