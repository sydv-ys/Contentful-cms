import { createClient } from "contentful";
import { useEffect, useState } from "react";

const client = createClient({
  space: "x505vtnbcpsz",
  environment: "master",
  accessToken: "i_WbVB5rznyq-n8z5n2bhc8a-FKKFFOJb1SvEAupbmo",
});

export const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  const getData = async () => {
    try {
      const response = await client.getEntries({ content_type: "projects" });
      const projects = response.items.map((item) => {
        const { title, url, image } = item.fields;
        const id = item.sys.id;
        const img = image?.fields?.file?.url;
        return { title, url, id, img };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};
