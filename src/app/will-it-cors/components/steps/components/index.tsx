import * as _ from 'lodash';
import { observer } from 'mobx-react-lite';
import { useState, type FormEventHandler } from 'react';

import { EditableHeaders } from './editable-headers';

import { Button } from '@/components/elements/button';
import { Heading } from '@/components/elements/heading';
import { CheckCircle, XCircle } from '@/components/elements/icon';
import { Link } from '@/components/elements/link';
import Stack from '@/components/elements/stack';
import { Text } from '@/components/elements/text';
import { InlineCode } from '@/components/modules/block-code';
import { Checkbox } from '@/components/modules/checkbox';
import { Input } from '@/components/modules/input';

interface QuestionProps {
  onNext: () => void;
  onChange: (e: string) => void;
  value?: string;
}

export const Question = ({ children, onNext }: Component<Pick<QuestionProps, 'onNext'>>) => {
  const handleFormSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    // @ts-expect-errorts-ignore
    if (e.target.checkValidity()) {
      onNext();
    }
  };

  return <form onSubmit={handleFormSubmit}>{children}</form>;
};

export const SourceUrlQuestion = observer(({ onNext, value, onChange }: QuestionProps) => {
  return (
    <Question onNext={onNext}>
      <Stack>
        <Heading fontSize="l"> What is the URL of the page that wants to send requests?</Heading>
        <Input
          id="source_url"
          type="url"
          required
          placeholder="http://example.com"
          value={value}
          onChange={e => {
            e.preventDefault();
            onChange(e.target.value);
          }}
        />
        <Button $isFluid type="submit">
          Next
        </Button>
      </Stack>
    </Question>
  );
});

export const TargetUrlQuestion = observer(({ onNext, value, onChange }: QuestionProps) => {
  return (
    <Question onNext={onNext}>
      <Stack>
        <Heading fontSize="l"> What is the URL you want to send a request to?</Heading>
        <Input
          id="target_url"
          type="url"
          required
          placeholder="http://example.com"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <Button $isFluid type="submit">
          Next
        </Button>
      </Stack>
    </Question>
  );
});

export const NotCorsResult = observer(({ origin }: { origin: string }) => (
  <Stack>
    <Heading>
      <CheckCircle aria-label="Yes" weight="fill" size={90} color="#6284FA" />
    </Heading>
    <Text fontSize="l">
      <strong>You can send your request without worrying about CORS.</strong>
    </Text>
    <Text fontSize="l">
      The origin of your source and target URLs is the same ({origin}), so CORS restrictions don&apos;t apply.
    </Text>
    <Text fontSize="l">
      There may be other (less restrictive) limits on the requests you can send though. Check the list of{' '}
      <Link href="https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name">forbidden headers</Link> for
      more info, and try out <Link href="/">HTTP Toolkit</Link> if you want to see exactly what&apos;s being sent &
      received in reality.
    </Text>
  </Stack>
));

export const MixedContentResult = observer(
  ({ sourceOrigin, targetOrigin }: { sourceOrigin: string; targetOrigin: string }) => (
    <Stack>
      <Heading>
        <XCircle aria-label="No" weight="fill" size={90} color="#D93E1C" />
      </Heading>
      <Text fontSize="l">
        This request will fail, because secure origins like <InlineCode>{sourceOrigin}</InlineCode> cannot make requests
        to insecure HTTP origins like <InlineCode>{targetOrigin}</InlineCode>.
      </Text>
      <Text fontSize="l">
        This is due to{' '}
        <Link href="https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content">
          mixed content restrictions
        </Link>{' '}
        that ensure HTTPS pages can only use secure content, and isn&apos;t related to CORS.
      </Text>
      <Text fontSize="l">
        To fix this, you should connect to <InlineCode>{targetOrigin}</InlineCode> over HTTPS instead of using plain
        HTTP.
      </Text>
    </Stack>
  ),
);

interface MethodQuestionProps extends QuestionProps {
  sourceOrigin: string;
  targetOrigin: string;
}

export const MethodQuestion = observer(
  ({ onNext, value, onChange, targetOrigin, sourceOrigin }: MethodQuestionProps) => {
    return (
      <Question onNext={onNext}>
        <Stack>
          <Text fontStyle="italic" fontSize="m">
            Your source and target URLs have different origins ({sourceOrigin} and {targetOrigin} respectively) so{' '}
            <strong>this is indeed a cross-origin request</strong>.
          </Text>
          <Heading fontSize="l">
            What <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods">HTTP method</Link> will your
            request use?
          </Heading>
          <Input
            id="method_url"
            type="text"
            required
            placeholder="GET"
            value={value}
            onChange={e => {
              const method = e.target.value.toUpperCase().trim();
              onChange(method);

              if (['CONNECT', 'TRACE', 'TRACK'].includes(method)) {
                e.target.setCustomValidity(`Browsers will not let you manually send a ${method} request`);
              } else {
                e.target.setCustomValidity('');
              }
              e.target.reportValidity();
            }}
          />
          <Button $isFluid type="submit">
            Next
          </Button>
        </Stack>
      </Question>
    );
  },
);

interface RequestExtrasQuestionProps extends Pick<QuestionProps, 'onNext'> {
  sendCredentials: boolean;
  onSendCredentials: (e: any) => void;
  onUseStreaming: (e: any) => void;
  headers: never[];
  useStreaming: boolean;
  onChangeHeaders: (e: any) => void;
}
export const RequestExtrasQuestion = observer(
  ({
    onNext,
    sendCredentials,
    onSendCredentials,
    headers,
    useStreaming,
    onUseStreaming,
    onChangeHeaders,
  }: RequestExtrasQuestionProps) => {
    const [showHeaders, setShowHeaders] = useState(!_.isEmpty(headers));
    return (
      <Question onNext={onNext}>
        <Stack>
          <Heading fontSize="l">Do you want send or read any other data?</Heading>

          <Checkbox
            id="send-credentials"
            required
            label="Send built-in browser credentials, like cookies or client certificates, with this request?"
            checked={sendCredentials}
            onChange={e => onSendCredentials(e.target.checked)}
          />

          <Checkbox
            id="send-useStreaming"
            required
            label="Incrementally stream the request or response, or monitor their progress?"
            checked={useStreaming}
            onChange={e => onUseStreaming(e.target.checked)}
          />

          <Checkbox
            id="show-headers"
            checked={showHeaders}
            onChange={e => {
              const shouldShowHeaders = e.target.checked;
              setShowHeaders(shouldShowHeaders);
              if (!shouldShowHeaders) {
                onChangeHeaders([]);
              }
            }}
            label="Send custom request headers?"
          />

          {showHeaders && (
            <EditableHeaders autoFocus headers={headers} onChange={onChangeHeaders} onlyClientHeaders={true} />
          )}

          <Button $isFluid type="submit">
            {headers.length === 0 && !sendCredentials && !useStreaming ? 'No, skip this' : 'Next'}
          </Button>
        </Stack>
      </Question>
    );
  },
);

export const ContentTypeQuestion = ({ onNext, value, onChange }: QuestionProps) => {
  return (
    <Question onNext={onNext}>
      <Stack>
        <Heading fontSize="l">
          What <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type">content type</Link>{' '}
          will your POST request use?
        </Heading>
        <Input id="" placeholder="text/plain" value={value || ''} onChange={e => onChange(e.target.value)} />
        <Button $isFluid type="submit">
          Next
        </Button>
        <Text fontSize="m" fontStyle="italic">
          Only POSTs sent with application/x-www-form-urlencoded, text/plain or multipart/form-data content-type headers
          are considered{' '}
          <Link href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests">simple requests</Link>.
        </Text>
      </Stack>
    </Question>
  );
};
