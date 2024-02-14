const ProtectedRoute = ({ children }) => {
    return (
      <React.Fragment>
        <SignedIn>{children ? children : <Outlet />}</SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
      </React.Fragment>
    );
  };
  
  export default ProtectedRoute;
  