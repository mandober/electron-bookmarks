
function* uuidGen() {
    let d
    let r
    while(true) {
        yield 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
            /[xy]/g,
            function(c) {
                r = (new Date().getTime() + Math.random()*16)%16 | 0
                d = Math.floor(d/16)
                return (c=='x' ? r : (r&0x3|0x8)).toString(16)
            }
        )
    }
}

const uuid = () => uuidGen().next().value
// {value: 'e35834ae-8694-4e16-8352-6d2368b3ccbf', done: false}

console.log(
    uuid()
)


/*
UUID is a 128-bit number, range: 0 - 2^128 - 1
The probability of identical UUIDs is negligible.

128 bits
16 bytes
16 x 8b (16 bytes/octets)
32 x 4b (32 nibbles or 32 hex digits)

8-4-4-4-12 = 32 hex digits in 5 hyphen-separated groups

for a total of 36 characters (32 hex digits + 4 hyphens)

For example:
123e4567-e89b-12d3-a456-426614174000
xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx

The 4-bit M and the 1-3 bit N fields code the format of the UUID itself

the 4 bits of digit M are the UUID version
the 1-3 msb of digit N code the UUID variant

123e4567-e89b-12d3-a456-426614174000
xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx

0000 0000-0000-0000-0000-0000 0000 0000
0000 0000-0000-0000-0000-0000 0000 0000
0000 0000-0000-0000-0000-0000 0000 0000
0000 0000-0000-0000-0000-0000 0000 0000


M is 1, and N is a (0b10xx), meaning that this is a v.1, variant-1 UUID
(that is, a time-based DCE/RFC 4122 UUID)


*/
