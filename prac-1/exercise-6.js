/**
 * Algorithm: StackInit()
 *
 * Sets global variable `t` to be the beginning of an empty stack
 * Input: None
 * Output: None
 *
 * t ← Null
 */

let t = null

class Node {
  constructor (data) {
    this.data = data
    this.next = null
  }
}

const NewNode = () => new Node()

/**
 * Algorithm: Push(Val)
 *
 * Pushes a new value `Val` onto global stack `t`, ie. it inserts
 * a new node containing `Val` onto the front of the linked list
 * Input: A new value `Val` to be pushed onto stack `t`
 * Output: None
 *
 * temp ← NewNode
 * temp ↑ data ← Val
 * temp ↑ next ← t
 * t ← temp
 */

function Push (Val) {
  const temp = NewNode()
  temp.data = Val
  temp.next = t

  t = temp
}

/**
 * Algorithm: PrintStack(Top)
 *
 * Prints the contents of the given stack from top to bototm
 * Input: A pointer `Top` to the top of a stack
 * Output: None
 *
 * while Top ≠ Null do
 *  print Top ↑ data
 *  Top ← Top ↑ next
 */

function PrintStack (Top, logger = console.log) {
  while (Top !== null) {
    logger(Top.data)
    Top = Top.next
  }
}

// -----------------------------

const test = require('tape')

let output
// Reset stack and log output
const clear = () => {
  t = null
  output = ''
}
// Concat msg onto the output global var
const testLogger = (msg) => {
  output += msg
}

test('Push', (tape) => {
  clear()
  tape.plan(1)

  Push('hello')
  tape.deepEqual(t, { data: 'hello', next: null }, 'stack has one node')
})

test('PrintStack', (tape) => {
  clear()
  tape.plan(2)

  Push('baz')
  Push('bar')
  Push('foo')
  PrintStack(t, testLogger)

  tape.equal(output, 'foobarbaz', 'output should match foobarbaz')
  tape.deepEqual(t, { data: 'foo', next: { data: 'bar', next: { data: 'baz', next: null } } }, 'stack has three nodes')
})
