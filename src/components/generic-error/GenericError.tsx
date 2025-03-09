interface GenericErrorProps {
    error: Error;
    resetErrorBoundary: () => void;
}

const GenericError = ({ error, resetErrorBoundary }: GenericErrorProps) => (
    <div
        role="alert"
        className="flex h-svh w-full items-center justify-center text-primary"
    >
        <div className="flex flex-col md:w-1/2 max-md:px-8 gap-4 items-center">
            <h1 className="text-accent font-sans text-lg text-center">
                Something went wrong.
            </h1>
            <p className="text-center">{error.message}</p>
            <button
                onClick={resetErrorBoundary}
                className="font-sans text-lg text-primary hover:text-accent transition-all duration-300 ease-in-out"
            >
                Try Again
            </button>
        </div>
    </div>
);

export default GenericError;
