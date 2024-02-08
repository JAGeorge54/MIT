function Status({status, setStatus}) {
    const renderStatus = () => {
        if (status === 'clean') {
          return;
        } else if (status === 'noText'){
          setTimeout(() => setStatus('clean'), 3000);
          return <p>YOU MUST ADD A VALUE FOR A TODO IN THE TEXTBOX BELOW</p>
        } else if (status === 'success') {
          setTimeout(() => setStatus('clean'), 3000);
          return <p> You successfully added a todo!</p>
        }
      }

    return (
        <>
            {renderStatus()}
        </>
    )
}

export default Status;