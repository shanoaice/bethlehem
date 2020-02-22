interface IndexableObject extends Object {
  [key: string]: any
}

function propEq(key: string): (value: any) => (obj: IndexableObject) => boolean
function propEq(key: string, value: any): (obj: IndexableObject) => boolean
function propEq(key: string, value: any, obj: IndexableObject): boolean
function propEq(
  key: string,
  value?: any,
  obj?: IndexableObject
):
  | boolean
  | ((obj: object) => boolean)
  | ((value: any) => (obj: object) => boolean) {
  if (arguments.length === 3) {
    if (typeof (obj as IndexableObject)[key] !== 'undefined') {
      return (obj as IndexableObject)[key] === value
    }

    return false
  }

  if (arguments.length === 3) {
    return (obj: IndexableObject) => propEq(key, value, obj)
  }

  return (value: any) => (obj: IndexableObject) => propEq(key, value, obj)
}

export default propEq
