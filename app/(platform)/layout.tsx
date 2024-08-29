import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <SignedOut></SignedOut>
      <SignedIn></SignedIn>
      {children}
    </ClerkProvider>
  );
};

export default PlatformLayout;
