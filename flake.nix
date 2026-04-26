{
  description = "A Nix-flake-based development environment";

  inputs = {
    nixpkgs = {
      url = "https://nixos.org/channels/nixpkgs-unstable/nixexprs.tar.xz";
    };
  };

  outputs =
    {
      nixpkgs,
      ...
    }:
    let
      supportedSystems = nixpkgs.lib.systems.flakeExposed;

      forAllSystems =
        function:
        nixpkgs.lib.genAttrs supportedSystems (
          system:
          function {
            pkgs = import nixpkgs {
              inherit system;
              overlays = [
                (final: previous: {

                })
              ];
            };
            inherit system;
          }
        );

      dependencies = pkgs: [
        pkgs.go-task
        pkgs.rclone
        pkgs.nodejs
        pkgs.pnpm
      ];

      devDependencies = pkgs: [
        pkgs.opencode

        pkgs.xsel

        pkgs.nix
        pkgs.nixd
        pkgs.nixfmt
      ];

      fmtDependencies = pkgs: pkgs.nixfmt-tree;
    in
    {
      formatter = forAllSystems ({ pkgs, ... }: fmtDependencies pkgs);

      devShells = forAllSystems (
        { pkgs, ... }:
        {
          ciEnvironment = pkgs.mkShellNoCC {
            packages = dependencies pkgs;
          };

          devEnvironment = pkgs.mkShellNoCC {
            packages = (dependencies pkgs) ++ (devDependencies pkgs);
          };
        }
      );

      packages = forAllSystems (
        { pkgs, ... }:
        {
          devEnvironment = pkgs.buildEnv {
            name = "development environment";
            paths = (dependencies pkgs) ++ (devDependencies pkgs);
          };
        }
      );
    };
}
