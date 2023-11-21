// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default App;

import React from "react";

function App() {
  // lets perform a crud in array
  // default value the ary state is empty array
  const [ary, setAry] = React.useState([]);
  const [inpValue, setInpValue] = React.useState("");
  // editIndex default value is -1
  const [editIndex, setEditIndex] = React.useState(-1);
  function handleSubmit() {
    if (editIndex >= 0) {
      // here  assigning the value of inpvalue in the ary index editIndex using this ary[editIndex] = inpValue
      ary[editIndex] = inpValue;
      setEditIndex(-1);
      return setInpValue("");
    }
    // setAry([...ary, inpValue]); this thing is destructuring the array name ary and add the value of inpvalue
    setAry([...ary, inpValue]);
    setInpValue("");
  }
  function handleDelete(index) {
    const filterAry = ary.filter((item, i) => i !== index);
    return setAry(filterAry);
  }
  return (
    <div>
      {/* trim() method is uses to remove whitespace from the string */}
      <input
        type="text"
        value={inpValue}
        onChange={(e) => setInpValue(e.target.value.trim())}
      />
      <button onClick={() => handleSubmit()}>
        {editIndex >= 0 ? "Update" : "Add"}
      </button>
      {/* now let iterate on the ary */}
      <div style={{ widows: 300 }}>
        {ary.length === 0 && "Your List is empty"}
        {ary.length > 0 &&
          ary.map((item, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 300,
                }}
              >
                <p> {item}</p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {/* now lets working on edit functionality  */}
                  <p
                    onClick={() => {
                      setEditIndex(index);
                      setInpValue(item);
                    }}
                  >
                    Edit
                  </p>
                  {/* let create a delete functionality */}
                  <p onClick={() => handleDelete(index)}> Delete</p>
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default App;
