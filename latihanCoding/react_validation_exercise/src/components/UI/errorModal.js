import Button from "./button"

const ErrorModal = props => {
    return (
        <div className="flex justify-center mx-auto">
     
                <div className="w-2/4 fixed mx-auto mt-24 rounded-xl shadow-lg border bg-gray-100 border-black">
                    <header className="bg-blue-200 rounded-t-xl">
                        <div className="text-3xl py-2 pl-2">
                            {props.title}
                            </div>
                    </header>

                    <div className="text-center py-4">
                        {props.message}
                    </div>

                    <footer className="mx-auto">
                        <div className="text-center">
                           <Button onClick={props.onConfirm}>Okay</Button>
                        </div>
                    </footer>

                </div>
      
        </div>
    )
}

export default ErrorModal