const Footer = () => (
    <div className="flex flex-col py-6 justify-center items-center gap-2 font-sans sm:flex-row">
        <small className="text-primary">
            &copy; {new Date().getFullYear()} Promise Ononokpono.&nbsp;
        </small>
        <small className="text-primary underline">Crafted by yours truly</small>
    </div>
);

export default Footer;
