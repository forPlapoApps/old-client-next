type User = {
  id: string;
  firebaseId: string;
  name: string;
  email: string;
  createdAt: date;
  updatedAt: date;
};

// currentUserを保持するための型定義
// NOTE: firebaseの型定義に対応するため、nameとemailでnullを許可している。
type UserSession = {
  name: string | null;
  email: string | null;
  firebaseId: string;
  token: string
} | null;
