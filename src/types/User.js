class User {
  constructor(
    id,
    displayName,
    isModerator,
    email,
    emailVerified,
    isAnonymous,
    phoneNumber,
    photoURL,
    description,
    location,
    profileURL,
    provider // the authentication provider (fb vs email vs google)
  ) {
    this.id = id;
    this.displayName = displayName;
    this.isModerator = isModerator;
    this.email = email;
    this.emailVerified = emailVerified;
    this.isAnonymous = isAnonymous;
    this.phoneNumber = phoneNumber;
    this.photoURL = photoURL;
    this.description = description;
    this.location = location;
    this.profileURL = profileURL;
    this.provider = provider;
  }
}

export default User;
