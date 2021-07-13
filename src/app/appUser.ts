export interface AppUser{
  id: number;
  name: string;
  isActive: boolean;
}

export interface AppUserMeeting{
  id: number;
  name: string;
  isParticipant: boolean;
  isSpeaking: boolean;
  isTimeKeeper: boolean;
}

