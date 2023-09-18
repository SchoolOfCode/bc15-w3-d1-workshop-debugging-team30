Functin extractInitialsFromFullName(fullName) {
/** Assumes that each name within the full name is separated by a "space" that can be used as a separator/delimiter.  */
const         names            = fullName.split(" ");
let initials = "";

For (let i = 0; i < names.length; i++) [
Const currentName = names[i];
const currentInitial = currentName.at(0);
initials += currentInitial;
}

Return initials;
)
