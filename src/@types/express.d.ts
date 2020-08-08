declare namespace Express {
  export interface Request {
    user: {
      id: string;
    };
    // io: SocketIO.Server;
    ioUser: string;
    connectedUsers: string[];
  }
}
