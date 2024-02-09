function maskEmail(email: string) {
    const parts = email.split('@');
    const username = parts[0];
    const domain = parts[1];
    const usernameLength = username.length;
    const numAsterisks = Math.max(usernameLength - 2, 0); // Keep at least one character visible
    const maskedUsername = username.charAt(0) + '*'.repeat(numAsterisks) + username.slice(-1);
    return maskedUsername + '@' + domain;
}

export  {maskEmail}
