What is semantic versioning?
semantion version used to assign version to software. For suppose the format is (18.2.5), it divide the version number in to three types which are Major, Minor, Patch
Major(18) is Breaking Changes(incompatible API changes)
Minor(2) is adding New features(backwards compatible)
Patch(5) is fixing bug(backwards compatible)

What does ^ mean in version numbers?
It indicates the first number,like the most recent major version. It will update user on all future minor/patch versions without incrementing the major version. For example ^1.2.3 , will use releases from 1.2.3 to <2.0.0


What's the difference between dependencies and devDependencies?
Dependencies are packages your project needs to run in production, while devDependencies are packages used only during development for tasks like testing and building.