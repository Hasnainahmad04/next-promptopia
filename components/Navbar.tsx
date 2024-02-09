"use client";
import { BuiltInProviderType } from "next-auth/providers/index";
import {
  ClientSafeProvider,
  LiteralUnion,
  getProviders,
  signIn,
  signOut,
  useSession,
} from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [provider, setProvider] = useState<Record<
    LiteralUnion<BuiltInProviderType>,
    ClientSafeProvider
  > | null>(null);

  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const { data: session } = useSession();

  useEffect(() => {
    const updateProvider = async () => {
      const res = await getProviders();
      setProvider(res);
    };
    updateProvider();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href={"/"} className="flex gap-2 flex-center">
        <Image
          src={"/assets/images/logo.svg"}
          width={30}
          height={30}
          className="object-contain"
          alt="Logo"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Design */}

      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href={"/create-prompt"} className="black_btn">
              Create Prompt
            </Link>
            <button onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>

            <Link href={"/profile"}>
              <Image
                src={session.user.image ?? ""}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile Pic"
              />
            </Link>
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((prov) => {
                return (
                  <button
                    onClick={() => signIn()}
                    className="black_btn"
                    key={prov?.name}
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>

      {/* Mobile Design */}

      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session.user.image ?? ""}
              width={30}
              height={30}
              className="rounded-full"
              alt="Logo"
              onClick={() => setDropdownVisibility((visible) => !visible)}
            />

            {isDropdownVisible && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={() => setDropdownVisibility(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={() => setDropdownVisibility(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={async () => {
                    setDropdownVisibility(false);
                    await signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {provider &&
              Object.values(provider).map((prov) => {
                return (
                  <button
                    onClick={() => {}}
                    className="black_btn"
                    key={prov?.name}
                  >
                    Sign In
                  </button>
                );
              })}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
