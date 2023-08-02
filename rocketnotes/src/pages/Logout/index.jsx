export const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout())
      .then(() => {
        navigate("/", { replace: true });
      });

  }, []);

  return <LoadingSpinner />;
};