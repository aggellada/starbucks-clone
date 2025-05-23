const LABELS = [
  "Privacy Notice",
  "Consumer Health Privacy Notice",
  "Terms of Use",
  "Do Not Share My Personal Information",
  " CA Supply Chain Act",
  " Accessibility",
  " Cookie Preferences",
];

const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    link: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
  },
  {
    name: "Twitter",
    link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/X_logo.jpg/480px-X_logo.jpg",
  },
  {
    name: "Instagram",
    link: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    name: "YouTube",
    link: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png",
  },
  {
    name: "Pinterest",
    link: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
  },
  {
    name: "Spotify",
    link: "https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Primary_Logo_RGB_Green.png",
  },
];

export default function FooterTwo() {
  return (
    <div className="p-8 w-full h-[40vh] lg:h-[60vh] flex flex-col gap-5 border-t-2 border-gray-600">
      <div className="w-full flex gap-4">
        {SOCIAL_MEDIA.map((icon) => (
          <img
            src={icon.link}
            alt={icon.name}
            key={icon.name}
            className="w-4 sm:w-8 md:w-10"
          />
        ))}
      </div>
      {LABELS.map((label) => (
        <h1>{label}</h1>
      ))}
      <p className="font-light text-sm">
        © 2025 Starbucks Coffee Company. All rights reserved.
      </p>
    </div>
  );
}
