// import * as React from "react";
import * as React from "react";
import ReactMde from "react-mde";
import * as Showdown from "showdown";
import "../Assests/CSS/MDEBlog.css";
import { Suggestion } from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

function loadSuggestions(
    text: string,
    triggeredBy: string
): Promise<Suggestion[]> {
    return new Promise((accept, reject) => {
        setTimeout(() => {
            const suggestions: Suggestion[] = [
                {
                    preview: "Andre",
                    value: "@andre",
                },
                {
                    preview: "Angela",
                    value: "@angela",
                },
                {
                    preview: "David",
                    value: "@david",
                },
                {
                    preview: "Louise",
                    value: "@louise",
                },
            ].filter((i) =>
                i.preview.toLowerCase().includes(text.toLowerCase())
            );
            accept(suggestions);
        }, 250);
    });
}

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
});
async function wait(time: number) {
    await new Promise((resolve, _reject) => {
        setInterval(resolve, time)
    });
}

export default function MDEBlog() {
    const [value, setValue] = React.useState("**Hello world!!!**");
    const [selectedTab, setSelectedTab] = React.useState<
        "write" | "preview" | undefined
    >("write");
    const save = async function*(data: any) {
        // Upload "data" to your server
        // Use XMLHttpRequest.send to send a FormData object containing
        // "data"
        // Check this question: https://stackoverflow.com/questions/18055422/how-to-receive-php-image-data-over-copy-n-paste-javascript-with-xmlhttprequest

        await wait(2000);
        // yields the URL that should be inserted in the markdown
        yield "https://picsum.photos/300";
        await wait(2000);

        // returns true meaning that the save was successful
        return true;
    };

    return (
        <div className="containerMDE">
            <ReactMde
                value={value}
                onChange={setValue}
                selectedTab={selectedTab}
                onTabChange={setSelectedTab}
                generateMarkdownPreview={(markdown) =>
                    Promise.resolve(converter.makeHtml(markdown))
                }
                loadSuggestions={loadSuggestions}
                childProps={{
                    writeButton: {
                        tabIndex: -1,
                    },
                }}
                paste={{
                    saveImage: save,
                }}
            />
        </div>
    );
}
